import React, { useEffect, useState, createContext, useContext } from "react";
import { ethers } from "ethers";

// INTERNAL IMPORT
import { CheckIfWalletConnected, connectingWithContract, connectWallet } from "../Utils/apiFeature";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const DAPP_NAME = "GPT_MEMBERSHIP";

  // STATE VARIABLES
  const [address, setAddress] = useState("");
  const [contractMembership, setContractMembership] = useState([]);
  const [Free, setFree] = useState();
  const [userMembership, setUserMembership] = useState({});

  // FETCHING CONTRACT DATA
  const fetchData = async () => {
    try {
      // LOAD DATA FROM LOCAL STORAGE
      const freeTrail = localStorage.getItem("freeTrail");
      const FREE_TRAIL = JSON.parse(freeTrail);
      setFree(freeTrail);

      // GET CONTRACT DATA
      const contract = await connectingWithContract();
      const connectAccount = await connectWallet();
      setAddress(connectAccount);

      // GET MEMBERSHIPS
      const oneMonth = await contract.getMemberships(1);
      const sixMonth = await contract.getMemberships(2);
      const oneYear = await contract.getMemberships(3);

      const memberships = [
        {
          membership_name: oneMonth?.name,
          membership_date: oneMonth?.date,
          membership_id: oneMonth?.id.toNumber(),
          membership_cost: ethers.utils.formatUnits(oneMonth?.cost.toString(), "ether"),
        },
        {
          membership_name: sixMonth?.name,
          membership_date: sixMonth?.date,
          membership_id: sixMonth?.id.toNumber(),
          membership_cost: ethers.utils.formatUnits(sixMonth?.cost.toString(), "ether"),
        },
        {
          membership_name: oneYear?.name,
          membership_date: oneYear?.date,
          membership_id: oneYear?.id.toNumber(),
          membership_cost: ethers.utils.formatUnits(oneYear?.cost.toString(), "ether"),
        },
      ];
      setContractMembership(memberships);

      // GET USER MEMBERSHIP
      const userMembership = await contract.getUsermembership(connectAccount);

      const userMembershipData = {
        addressUser: userMembership.addressUser.toLowerCase(),
        expiredate: userMembership.expireDate,
        cost: ethers.utils.formatUnits(userMembership.cost.toString(), "ether"),
        membershipId: userMembership.membershipId.toNumber(),
        id: userMembership.id.toNumber(),
      };
      setUserMembership(userMembershipData);
      localStorage.setItem("UserDetail", JSON.stringify(userMembershipData));
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // LISTING MEMBERSHIP
  const listMembership = async () => {
    const amount = 5;
    const MEMBERSHIP_NAME = "One Year";
    const MEMBERSHIP_COST = ethers.utils.parseUnits(amount.toString(), "ether");
    const MEMBERSHIP_DATE = "July 28 2024";

    const contract = await connectingWithContract();

    const list = await contract.list(MEMBERSHIP_NAME, MEMBERSHIP_COST, MEMBERSHIP_DATE);
    await list.wait();
    console.log(list);
  };

  // BUY MEMBERSHIP
  const buyMembership = async (memberShip_id) => {
    const contract = await connectingWithContract();
    const connectAccount = await connectWallet();
    setAddress(connectAccount);

    try {
      let date, expiredDate, money;
      if (memberShip_id == 1) {
        date = new Date(Date.now() + 2678400000);
        expiredDate = date.toLocaleDateString("en-US");
        money = ethers.utils.parseEther("1");
      } else if (memberShip_id == 2) {
        date = new Date(Date.now() + 2678400000 * 6);
        expiredDate = date.toLocaleDateString("en-US");
        money = ethers.utils.parseEther("3");
      } else {
        date = new Date(Date.now() + 2678400000 * 12);
        expiredDate = date.toLocaleDateString("en-US");
        money = ethers.utils.parseEther("5");
      }

      const mintTransaction = await contract.mint(memberShip_id, connectAccount, expiredDate.toString(), {
        value: money.toString(),
      });
      await mintTransaction.wait();
      const freeTrail = JSON.stringify("Pro Member");
      localStorage.setItem("freeTrail", freeTrail);
      console.log("Taken membership", mintTransaction);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{ DAPP_NAME, listMembership, buyMembership, Free, address, contractMembership, userMembership }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

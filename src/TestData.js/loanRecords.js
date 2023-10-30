import Bank6 from "../assets/images/uba.jpeg";
import Bank1 from "../assets/images/fcmb.png";
import Bank2 from "../assets/images/gtb.png";
import Bank3 from "../assets/images/first-bank.png";
import Bank4 from "../assets/images/access.jpeg";

export const loanRecords = [
  {
    accName: "Jude Austin",
    bankName: "First City Monument Bank",
    Bank: Bank1,
    date: "10/10/2023",
    status: "Approved",
    color: "green",
    amount: 10000,
    category: ["received"],
    id: 1,
    beneficiary_id: 1,
  },
  {
    accName: " Micheal Afolabi",
    bankName: "Union Bank of Africa",
    Bank: Bank6,
    date: "14/10/2023",
    status: "Declined",
    amount: 1000,
    color: "red",
    id: 2,
    beneficiary_id: 2,
    category: ["received"],
  },
  {
    accName: " Abraham Lawal",
    bankName: "Access Bank",
    Bank: Bank4,
    date: "14/10/2023",
    status: "Pending",
    color: "orange",
    amount: 5000,
    id: 3,
    beneficiary_id: 3,
    category: ["sent"],
  },
  {
    accName: " Adedeji Yusuf",
    bankName: "First Bank",
    Bank: Bank3,
    date: "14/10/2023",
    status: "Approved",
    color: "green",
    amount: 10000,
    id: 4,
    beneficiary_id: 4,
    category: ["received"],
  },
  {
    accName: "Okechukwu Onyesu",
    bankName: "Guarantee Trust Bank",
    Bank: Bank2,
    date: "30/10/2023",
    status: "Approved",
    color: "green",
    amount: 2000,
    id: 5,
    beneficiary_id: 5,
    category: ["sent"],
  },
];

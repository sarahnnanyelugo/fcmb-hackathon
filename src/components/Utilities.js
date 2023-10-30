export default function curr(amount) {
  const localAmount = parseFloat(amount).toLocaleString("en-NG");
  return `₦${localAmount}`;
}
export const dt = ({ numberOfDays, dmy }) => {
  let paybackDate = new Date(new Date());
  let formattedDate = paybackDate;
  if (!isNaN(numberOfDays)) {
    // Add the number of days to paybackDate
    paybackDate.setDate(paybackDate.getDate() + numberOfDays);

    console.log(formattedDate); // Outputs the resulting date in "YYYY-MM-DD" format
  } else {
    console.error("Invalid loan duration format", formattedDate);
  }
  // Get the resulting date in the format "YYYY-MM-DD"
  if (dmy != undefined && dmy == true) {
    return dmyFormat(paybackDate);
  } else {
    formattedDate = paybackDate.toISOString().split("T")[0];
    return formattedDate;
  }
};

const dmyFormat = (paybackDate) => {
  // Get the day, month, and year components
  const day = paybackDate.getDate();
  const month = paybackDate.getMonth() + 1; // Months are 0-based
  const year = paybackDate.getFullYear();

  // Create a formatted date string in "DD/MM/YYYY" format
  return `${day}/${month}/${year}`;
};

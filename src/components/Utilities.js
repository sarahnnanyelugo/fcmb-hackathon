export default function curr(amount) {
  const localAmount = parseFloat(amount).toLocaleString("en-NG");
  return `₦${localAmount}`;
}
export const dt = ({ numberOfDays }) => {
  let paybackDate = new Date(new Date());
  let formattedDate = paybackDate;
  if (!isNaN(numberOfDays)) {
    // Add the number of days to paybackDate
    paybackDate.setDate(paybackDate.getDate() + numberOfDays);

    // Get the resulting date in the format "YYYY-MM-DD"
    formattedDate = paybackDate.toISOString().split("T")[0];

    console.log(formattedDate); // Outputs the resulting date in "YYYY-MM-DD" format
  } else {
    console.error("Invalid loan duration format", formattedDate);
  }
  return formattedDate;
};

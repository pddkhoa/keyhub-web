function convertDate(inputDate: string) {
  // Tạo một đối tượng Date từ chuỗi đầu vào
  const date = new Date(inputDate);

  // Lấy ngày, tháng và năm từ đối tượng Date
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  // Tạo chuỗi ngày đã được chuyển đổi
  const formattedDate = `${day} ${month.toUpperCase()} ${year}`;

  return formattedDate;
}

export default convertDate;

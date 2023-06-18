$(document).ready(function() {
    // Data array
    var data = [
      { number: 1, product: "Sepatu", sold: 50, revenue: 10000000 },
      { number: 2, product: "Baju", sold: 100, revenue: 5000000 },
      { number: 3, product: "Celana", sold: 80, revenue: 8000000 },
      { number: 4, product: "Tas", sold: 30, revenue: 12000000 },
      { number: 5, product: "Topi", sold: 20, revenue: 2000000 },
    ];
  
    // Loop through the data and append to the table
    $.each(data, function(index, item) {
      var row = "<tr>" +
        "<td>" + item.number + "</td>" +
        "<td>" + item.product + "</td>" +
        "<td>" + item.sold + "</td>" +
        "<td>" + formatCurrency(item.revenue) + "</td>" +
        "</tr>";
  
      $("#data-table tbody").append(row);
    });
  
    // Format currency function
    function formatCurrency(number) {
      return "Rp " + number.toLocaleString("id-ID");
    }
  });
  

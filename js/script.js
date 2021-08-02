var price, crust_price, topping_price;
let total = 0;
function getPizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


// orders button
$(document).ready(function () {
  $("button.orders").click(function (event) {
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = $("#topping option:selected").val();

    switch (psize) {
      case "0":
        price = 0;
        break;
      case "small":
        price = 600;
        console.log(price);
        break;
      case "medium":
        price = 800;
        break;
      case "large":
        price = 1000;
        console.log(price);
      default:
        console.log("error");
    }
    switch (pcrust) {
      case "0":
        crust_price = 0;
        break;
      case "Cheese-Stuffed Crust":
        crust_price = 200;
        break;
      case "Thin Crust":
        crust_price = 100;
        break;
      case "Sicilian Style":
        crust_price = 150;
        break;
      case "Neapolitan Crust":
        crust_price = 180;
        break;
      case "NY Style Pizza":
        crust_price = 220;
        break;
      default:
        console.log("No price");
    }
    switch (ptopping) {
      case "0":
        topping_price = 0;
        break;
      case "Mushrooms":
        topping_price = 50;
        break;
      case "Onions":
        topping_price = 40;
        break;
      case "Sausage":
        topping_price = 45;
        break;
      case "Bacon":
        topping_price = 65;
        break;
      case "Black Olives":
        topping_price = 50;
        break;
      case "Green Peppers":
        topping_price = 50;
        break;
      case "Spinach":
        topping_price = 30;
        break;
      case "Extra Cheese":
        topping_price = 55;
        break;
      default:
        console.log("No price");
    }

    if ((psize == "0") && (pcrust == "0")) {
      console.log("nothing selected");
      $("button.orders").show();
      $("div.order").hide();
      alert("Please select pizza size and crust");
    }
    else {
      $("button.orders").hide();
      $("div.order").slideDown(1000);
    }

    total = price + crust_price + topping_price;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html($("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html($("#topping option:selected").val());
    $("#totals").html(total);

    // Add pizza button
    $("button.addPizza").click(function () {
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = $("#topping option:selected").val();
      $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
        let ptopping = $("#topping option:selected").val();
      });
      switch (psize) {
        case "0":
          price = 0;
          break;
        case "small":
          price = 600;
          console.log(price);
          break;
        case "medium":
          price = 800;
          break;
        case "large":
          price = 1000;
          console.log(price);
        default:
          console.log("error");
      }
      switch (pcrust) {
        case "0":
          crust_price = 0;
          break;
        case "Cheese-Stuffed Crust":
          crust_price = 200;
          break;
        case "Thin Crust":
          crust_price = 100;
          break;
        case "Sicilian Style":
          crust_price = 150;
          break;
        case "Neapolitan Crust":
          crust_price = 180;
          break;
        case "NY Style Pizza":
          crust_price = 220;
          break;
        default:
          console.log("No price");
      }
      switch (ptopping) {
        case "0":
          topping_price = 0;
          break;
        case "Mushrooms":
          topping_price = 50;
          break;
        case "Onions":
          topping_price = 40;
          break;
        case "Sausage":
          topping_price = 45;
          break;
        case "Bacon":
          topping_price = 65;
          break;
        case "Black Olives":
          topping_price = 50;
          break;
        case "Green Peppers":
          topping_price = 50;
          break;
        case "Spinach":
          topping_price = 30;
          break;
        case "Extra Cheese":
          topping_price = 55;
          break;
        default:
          console.log("No price")
      }
      total = price + crust_price + topping_price;
      console.log(total);

      checkoutTotal = checkoutTotal + total;
      console.log(checkoutTotal);
      // constractor function
      var newOrder = new getPizza(pname, psize, pcrust, ptopping, total);

      $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
      console.log(newOrder);



    });
    // Checkout button
    $("button#purchase").click(function () {
      $("button#purchase").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bill is KSH" + checkoutTotal);
      $("#pizzatotal").append("Your bill is KSH" + checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function () {
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount = checkoutTotal + 150;
      console.log("You will pay sh. " + deliceryamount + " on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: " + deliceryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function (event) {
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount = checkoutTotal + 150;
      console.log("Final Bill is: " + deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

        $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
    event.preventDefault();
  });
});
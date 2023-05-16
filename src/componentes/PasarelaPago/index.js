import React from "react";



export const PasarelaPago = () => {

    <section>
        <script src="httpx://wwwpaypal.com/sdk/js?client-id=AatZt26Zvkt4scMztDw5-XBC7PBhlCf1dqqdF0Zjy2ikL4LY9w-gTY9lKiQC-VGdX7YSLkKzmuNxBPtm&currency=MXN"></script>

        <script>
        paypal.Buttons({
            createOrder function(data, actions)} {
            return actions.order.create({
            purchase_units: [{
            amount: {
            value: '50.00' //Pues 50 pesitos
          }
        }]
      });
    },
        onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
        // Call your server to save the transaction
        return fetch('/paypal-transaction-complete', {
            method: 'post',
        headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify({
            orderID: data.orderID
          })
        });
      });
    }
  }).render('#paypal-button-container');
  </script>
    </section>

},

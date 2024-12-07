import React from 'react'
import { create } from 'zustand'

const usePaymentMethodStore = create((set)=>({
    

   paymentMethods:  [
        {
          id: 1,
          icon: (<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8177 3.56333C12.9402 3.56333 12.0824 3.82354 11.3528 4.31104C10.6232 4.79854 10.0546 5.49145 9.71877 6.30213C9.38297 7.11282 9.29511 8.00488 9.4663 8.8655C9.63749 9.72612 10.06 10.5166 10.6805 11.1371C11.301 11.7576 12.0915 12.1801 12.9521 12.3513C13.8128 12.5225 14.7048 12.4347 15.5155 12.0989C16.3262 11.7631 17.0191 11.1944 17.5066 10.4648C17.9941 9.73521 18.2543 8.87743 18.2543 7.99995C18.2543 6.82329 17.7869 5.69482 16.9548 4.86279C16.1228 4.03076 14.9943 3.56333 13.8177 3.56333ZM13.8177 10.6619C13.2912 10.6619 12.7765 10.5058 12.3388 10.2133C11.901 9.9208 11.5598 9.50506 11.3583 9.01865C11.1569 8.53223 11.1041 7.997 11.2068 7.48063C11.3096 6.96426 11.5631 6.48994 11.9354 6.11766C12.3077 5.74537 12.782 5.49184 13.2983 5.38913C13.8147 5.28642 14.35 5.33913 14.8364 5.54061C15.3228 5.74209 15.7385 6.08328 16.031 6.52104C16.3235 6.9588 16.4796 7.47347 16.4796 7.99995C16.4796 8.70595 16.1992 9.38304 15.7 9.88225C15.2008 10.3815 14.5237 10.6619 13.8177 10.6619ZM26.2402 0.0140381H1.39514C1.1598 0.0140381 0.934109 0.107524 0.767704 0.273929C0.601298 0.440335 0.507813 0.666029 0.507812 0.901362V15.0985C0.507813 15.3339 0.601298 15.5596 0.767704 15.726C0.934109 15.8924 1.1598 15.9859 1.39514 15.9859H26.2402C26.4755 15.9859 26.7012 15.8924 26.8676 15.726C27.034 15.5596 27.1275 15.3339 27.1275 15.0985V0.901362C27.1275 0.666029 27.034 0.440335 26.8676 0.273929C26.7012 0.107524 26.4755 0.0140381 26.2402 0.0140381ZM21.0993 14.2112H6.53607C6.23816 13.2037 5.6929 12.2867 4.94996 11.5437C4.20702 10.8008 3.29001 10.2555 2.28246 9.95761V6.04229C3.29001 5.74438 4.20702 5.19912 4.94996 4.45619C5.6929 3.71325 6.23816 2.79624 6.53607 1.78869H21.0993C21.3972 2.79624 21.9424 3.71325 22.6854 4.45619C23.4283 5.19912 24.3453 5.74438 25.3529 6.04229V9.95761C24.3453 10.2555 23.4283 10.8008 22.6854 11.5437C21.9424 12.2867 21.3972 13.2037 21.0993 14.2112ZM25.3529 4.15895C24.2886 3.7013 23.4403 2.85299 22.9826 1.78869H25.3529V4.15895ZM4.65272 1.78869C4.19508 2.85299 3.34676 3.7013 2.28246 4.15895V1.78869H4.65272ZM2.28246 11.841C3.34676 12.2986 4.19508 13.1469 4.65272 14.2112H2.28246V11.841ZM22.9826 14.2112C23.4403 13.1469 24.2886 12.2986 25.3529 11.841V14.2112H22.9826Z" fill="#71717A"/>
            </svg>
            ),
          label: "PAYMENT ON ARRIVAL",
          status:false,
          info: "NOTE : You could pay directly in our structure with any kind of credit card or cash."
        },
        {
          id: 2,
          icon: (<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7924 0.875H1.48884C1.10641 0.875 0.739637 1.02513 0.469216 1.29237C0.198796 1.55961 0.046875 1.92207 0.046875 2.3V13.7C0.046875 14.0779 0.198796 14.4404 0.469216 14.7076C0.739637 14.9749 1.10641 15.125 1.48884 15.125H18.7924C19.1748 15.125 19.5416 14.9749 19.812 14.7076C20.0825 14.4404 20.2344 14.0779 20.2344 13.7V2.3C20.2344 1.92207 20.0825 1.55961 19.812 1.29237C19.5416 1.02513 19.1748 0.875 18.7924 0.875ZM18.7924 2.3V4.4375H1.48884V2.3H18.7924ZM18.7924 13.7H1.48884V5.8625H18.7924V13.7ZM17.3504 11.5625C17.3504 11.7515 17.2745 11.9327 17.1393 12.0663C17.0041 12.1999 16.8207 12.275 16.6295 12.275H13.7455C13.5543 12.275 13.3709 12.1999 13.2357 12.0663C13.1005 11.9327 13.0246 11.7515 13.0246 11.5625C13.0246 11.3735 13.1005 11.1923 13.2357 11.0587C13.3709 10.9251 13.5543 10.85 13.7455 10.85H16.6295C16.8207 10.85 17.0041 10.9251 17.1393 11.0587C17.2745 11.1923 17.3504 11.3735 17.3504 11.5625ZM11.5826 11.5625C11.5826 11.7515 11.5066 11.9327 11.3714 12.0663C11.2362 12.1999 11.0528 12.275 10.8616 12.275H9.41964C9.22843 12.275 9.04504 12.1999 8.90983 12.0663C8.77462 11.9327 8.69866 11.7515 8.69866 11.5625C8.69866 11.3735 8.77462 11.1923 8.90983 11.0587C9.04504 10.9251 9.22843 10.85 9.41964 10.85H10.8616C11.0528 10.85 11.2362 10.9251 11.3714 11.0587C11.5066 11.1923 11.5826 11.3735 11.5826 11.5625Z" fill="#7B7373"/>
            </svg>
            ),
          label: "PAY WITH CREDIT CARD",
          status:false,
          info: "Pay with your credit card via Stripe. Use the card number 4242424242424242 with CVC 123 and a valid expiration date to test a payment."
        },
        {
          id: 3,
          icon: (<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.27148 6.73813H3.1084V11.785H1.88379C1.7214 11.785 1.56565 11.8515 1.45082 11.9698C1.33599 12.0881 1.27148 12.2486 1.27148 12.4159C1.27148 12.5832 1.33599 12.7436 1.45082 12.862C1.56565 12.9803 1.7214 13.0467 1.88379 13.0467H16.5791C16.7415 13.0467 16.8972 12.9803 17.0121 12.862C17.1269 12.7436 17.1914 12.5832 17.1914 12.4159C17.1914 12.2486 17.1269 12.0881 17.0121 11.9698C16.8972 11.8515 16.7415 11.785 16.5791 11.785H15.3545V6.73813H17.1914C17.3246 6.738 17.4542 6.69309 17.5604 6.61024C17.6666 6.52738 17.7437 6.41109 17.78 6.27901C17.8162 6.14694 17.8097 6.00627 17.7614 5.87837C17.713 5.75046 17.6255 5.64229 17.5121 5.57026L9.55214 0.52338C9.45568 0.462279 9.34467 0.429932 9.23145 0.429932C9.11822 0.429932 9.00721 0.462279 8.91075 0.52338L0.95079 5.57026C0.837382 5.64229 0.749869 5.75046 0.701528 5.87837C0.653187 6.00627 0.646655 6.14694 0.682924 6.27901C0.719192 6.41109 0.796281 6.52738 0.902497 6.61024C1.00871 6.69309 1.13826 6.738 1.27148 6.73813ZM4.33301 6.73813H6.78223V11.785H4.33301V6.73813ZM10.4561 6.73813V11.785H8.00684V6.73813H10.4561ZM14.1299 11.785H11.6807V6.73813H14.1299V11.785ZM9.23145 1.80087L15.0284 5.47641H3.43445L9.23145 1.80087ZM18.416 14.9393C18.416 15.1066 18.3515 15.2671 18.2367 15.3854C18.1218 15.5037 17.9661 15.5702 17.8037 15.5702H0.65918C0.496786 15.5702 0.341044 15.5037 0.226215 15.3854C0.111385 15.2671 0.046875 15.1066 0.046875 14.9393C0.046875 14.772 0.111385 14.6115 0.226215 14.4932C0.341044 14.3749 0.496786 14.3084 0.65918 14.3084H17.8037C17.9661 14.3084 18.1218 14.3749 18.2367 14.4932C18.3515 14.6115 18.416 14.772 18.416 14.9393Z" fill="#71717A"/>
            </svg>
            ),
          label: "BANK TRANSFER",
          status:false,
          info: "Your reservation will be confirmed when we receive the bank transfer, below our data:"
        },
      ]
}))

export default usePaymentMethodStore
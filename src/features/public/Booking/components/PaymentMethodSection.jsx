import React from 'react'
import usePaymentMethodStore from '../../../stores/usePaymentMethodStore';

const PaymentMethodSection = ({method: {id,icon,label,info}}) => {
    const { paymentMethods } = usePaymentMethodStore();
    const handleCheckBox = () => {};
  return (
    <div className="mt-8 border border-border rounded-md p-5 bg-white" key={id}>
    <div className="flex gap-4 items-center ">
      <input
        type="checkbox"
        onChange={handleCheckBox}
        className="w-[18px] h-[18px] appearance-none  rounded-full border-2 border-primary 
bg-transparent checked:bg-primary checked:border-none transition-all checked:ring-primary focus:outline-none ring-secondary"
      />
      {icon}
      <span className="font-heading font-bold text-2xl">
        {label}
      </span>
    </div>
    <p className="mt-[17px] font-body text-md  text-secondary">
      {info}
    </p>
  </div>
  )
}

export default PaymentMethodSection
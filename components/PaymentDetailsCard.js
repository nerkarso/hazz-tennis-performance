import CreditCard from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function PaymentDetailsCard({ data }) {
  return (
    <div className="mb-6 credit-card-preview">
      <CreditCard className="aaa" cvc={data?.cvc ?? ''} expiry={data?.expiry ?? ''} name={data?.name ?? ''} number={data?.number ?? ''} />
    </div>
  );
}

import { Button, FormGroup, Input, Modal, ModalHeader, Note } from '@/elements';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useForm } from 'react-hook-form';

export default function PaymentModal({ isOpen, onClose, onSubmit }) {
  const { formState, handleSubmit, register, reset, watch } = useForm({
    defaultValues: {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    },
  });
  const { errors } = formState;
  const wachter = watch();

  const onSubmitHandler = (formData) => {
    onSubmit(formData);
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader title="Pay with card" onClose={onClose} />
      <div className="px-4 pt-2 pb-4 overflow-y-auto max-h-[75vh]">
        <Cards cvc={wachter?.cvc} expiry={wachter?.expiry} name={wachter?.name} number={wachter?.number} />
        <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col flex-1 gap-4 mt-6">
          <div>
            <FormGroup htmlFor="card-info" label="Card information" error={errors.number || errors.expiry || errors.cvc}>
              <Input
                type="number"
                id="card-info"
                className="flex-1 border-b-0 rounded-bl-none rounded-br-none focus:!border-neutral-400 focus:!ring-0 dark:focus:!border-neutral-600"
                placeholder="4321 4321 4321 4321"
                {...register('number', {
                  minLength: 16,
                  maxLength: 16,
                  required: true,
                })}
              />
            </FormGroup>
            <div className="flex items-center -mt-1">
              <FormGroup>
                <Input
                  type="text"
                  className="w-full border-r-0 rounded-r-none rounded-tl-none focus:!border-neutral-400 focus:!ring-0 dark:focus:!border-neutral-600"
                  placeholder="MM / YY"
                  {...register('expiry', {
                    minLength: 5,
                    maxLength: 5,
                    required: true,
                  })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="number"
                  className="w-full rounded-l-none rounded-tr-none focus:!border-neutral-400 focus:!ring-0 dark:focus:!border-neutral-600"
                  placeholder="CVC"
                  {...register('cvc', {
                    minLength: 3,
                    maxLength: 3,
                    required: true,
                  })}
                />
              </FormGroup>
            </div>
          </div>
          <FormGroup htmlFor="name" label="Name on card" error={errors.name}>
            <Input
              type="text"
              id="name"
              className="flex-1"
              error={errors.name}
              {...register('name', {
                required: true,
              })}
            />
          </FormGroup>
          <Button type="submit" className="w-full" color="primary" variant="solid">
            Pay
          </Button>
          <Note color="yellow">This is for demonstration purposes only</Note>
        </form>
      </div>
    </Modal>
  );
}

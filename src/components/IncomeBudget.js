import { Income } from "./Income";
import { Budget } from "./Budget";

export const IncomeBudget = () => {

  return (
    <div>
      <hr />
        <div className='w-full h-[500px]'>
          <h1 className='my-24 text-4xl leading-10 mx-[300px] text-center'>To help you be on track of your expenses, please insert the amounts below and press Enter to continue.</h1>
          <div className='flex flex-row justify-around content-center items-center'>
            <Income />
            <Budget />
          </div>
        </div>
      <hr />
    </div>
  );
}
import CalculateNumber from '@/interfaces/shared/CalculateNumber';

const calculateNumber = (numbers: CalculateNumber[]): number => {
  return numbers.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export default calculateNumber;

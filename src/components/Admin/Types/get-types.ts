import axios from 'src/lib/axios';

interface Types {
  types: Array<Object>;
}

const getTypes = async (): Promise<Types> => {
  const { types }: any = await axios.get('types/readMany');

  return types;
};

export default getTypes;

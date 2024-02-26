import { Box } from "../../assets/icons/icons";

const EmptyState = (props) => {
  return (
    <div className="flex  justify-center items-center">
      <div>
        <div className="flex justify-center my-4">
          <Box className="h-28 w-28 opacity-5" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-gray-700">
            This place looks empty 😉
          </p>
          <p className="text-slate-400 mt-2">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;

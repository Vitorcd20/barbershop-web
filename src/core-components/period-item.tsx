import ButtonIcon from "../components/button-icon";
import Trash from "../assets/icons/Trash.svg?react";
import Text from "../components/text";
import { useAppointment } from "../hooks/use-appointment";

type Props = {
  id: string;
  time: string;
  client: string;
};

export default function PeriodItem({ client, id, time }: Props) {
  const { deleteAppointment } = useAppointment();

  function handleDelete(id: string) {
    deleteAppointment(id);
  }

  return (
    <li>
      <Text variant="title-md">{time}</Text>
      <Text variant="text-md" className="w-full">
        {client}
      </Text>
      <ButtonIcon
        className="shrink-0 fill-yellow"
        icon={Trash}
        onClick={() => handleDelete(id)}
      />
    </li>
  );
}

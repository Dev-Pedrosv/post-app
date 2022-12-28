import * as C from "./style";
import { ProfileImage } from "../profileImage";
import { ProfileDescription } from "../ProfileDescription";
import { Input } from "../Input";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ProfileDetail = ({ user, closeDetail }) => {
  return (
    user && (
      <C.Container>
        <C.ContainerContent>
          <C.User>
            <ProfileImage width="100px" height="100px" image={user?.image} />
            <ProfileDescription
              userName={user?.name}
              description={user?.username}
              textDecoration={false}
            />
            <AiOutlineCloseCircle
              size={40}
              className="icon"
              onClick={closeDetail}
            />
          </C.User>

          <C.ContainerInfo>
            <Input label="Email" value={user?.email} />
            <Input label="Telefone" value={user?.phone} />
            <Input label="website" value={user?.website} />
            <Input label="Empresa" value={user?.company?.name} />

            <Input label="Rua" value={user?.address?.street} />
            <Input label="Cidade" value={user?.address?.city} />
            <Input label="CEP" value={user?.address?.zipcode} />
            <Input label="Complemento" value={user?.address?.suite} />
          </C.ContainerInfo>
        </C.ContainerContent>
      </C.Container>
    )
  );
};

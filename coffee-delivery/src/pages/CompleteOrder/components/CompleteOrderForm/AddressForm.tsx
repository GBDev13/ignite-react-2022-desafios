import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register("district")}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register("city")}
        error={errors.city?.message}
      />
      <Input placeholder="UF" {...register("uf")} error={errors.uf?.message} />
    </AddressFormContainer>
  );
}

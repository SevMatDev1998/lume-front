"use client";

import { useFormContext } from "react-hook-form";
import { PROFESSIONS } from "@/constants/professions";
import { Field, Input, Select } from "@/components/ui";
import { ProfileFormType } from "@/yupValidation/AuthValidation";

export const ProfileFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProfileFormType>();

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName?.message}>
          <Input autoComplete="given-name" {...register("firstName")} />
        </Field>
        <Field label="Last name" error={errors.lastName?.message}>
          <Input autoComplete="family-name" {...register("lastName")} />
        </Field>
      </div>
      <Field label="Phone" error={errors.phone?.message}>
        <Input type="tel" autoComplete="tel" placeholder="+374 77 123456" {...register("phone")} />
      </Field>
      <Field label="Profession" error={errors.profession?.message}>
        <Select {...register("profession")}>
          <option value="">Select profession</option>
          {PROFESSIONS.map((profession) => (
            <option key={profession.value} value={profession.value}>
              {profession.label}
            </option>
          ))}
        </Select>
      </Field>
    </>
  );
};

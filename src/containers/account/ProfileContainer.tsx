"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { Button, Field, Input } from "@/components/ui";
import { ProfileFields } from "@/components/account/ProfileFields";
import { useUpdateMeMutation } from "@/services/auth/auth.service";
import useAppSelector from "@/hooks/useAppSelector";
import { ProfileFormType, profileSchema } from "@/yupValidation/AuthValidation";
import { getApiErrorMessage } from "@/utils/utils";

const ProfileContainer = () => {
  const user = useAppSelector((state) => state.auth.user)!;
  const [updateMe, { isLoading }] = useUpdateMeMutation();
  const form = useForm<ProfileFormType>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      phone: user.phone ?? "",
      profession: user.profession ?? undefined,
    },
  });

  const onSubmit = async (data: ProfileFormType) => {
    try {
      await updateMe(data).unwrap();
      toast.success("Profile saved");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex max-w-md flex-col gap-4" noValidate onSubmit={form.handleSubmit(onSubmit)}>
        <ProfileFields />
        <Field label="Email">
          <Input type="email" value={user.email} disabled />
        </Field>
        <Button type="submit" className="w-max" disabled={isLoading}>
          {isLoading ? "Saving…" : "Save"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default ProfileContainer;

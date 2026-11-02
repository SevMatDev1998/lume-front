import { PROFESSIONS } from "@/constants/professions";
import { Field, Input, Select } from "@/components/ui";

export const ProfileFields = () => (
  <>
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="First name">
        <Input name="firstName" autoComplete="given-name" />
      </Field>
      <Field label="Last name">
        <Input name="lastName" autoComplete="family-name" />
      </Field>
    </div>
    <Field label="Phone">
      <Input name="phone" type="tel" autoComplete="tel" />
    </Field>
    <Field label="Profession">
      <Select name="profession" defaultValue="">
        <option value="" disabled>
          Select profession
        </option>
        {PROFESSIONS.map((profession) => (
          <option key={profession.value} value={profession.value}>
            {profession.label}
          </option>
        ))}
      </Select>
    </Field>
  </>
);

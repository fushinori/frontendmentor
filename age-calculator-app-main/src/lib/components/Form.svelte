<script lang="ts">
  import { createForm } from "felte";

  import Divider from "./Divider.svelte";
  import Input from "./Input.svelte";
  import { isValidDate, parseDate, calculateAge } from "$lib/logic";

  interface Errors {
    day: string;
    month: string;
    year: string;
  }

  const { form, errors } = createForm({
    onSubmit: (values) => {
      calculateAge(values.year, values.month, values.day);
    },
    validate: (values) => {
      const errors: Errors = { day: "", month: "", year: "" };
      const day = parseDate(values.day);
      const month = parseDate(values.month);
      const year = parseDate(values.year);
      const currentYear = new Date().getFullYear();
      if (!isValidDate(year, month, day)) {
        errors.day = "Must be a valid day";
      }
      if (month <= 0 || month > 12) {
        errors.month = "Must be a valid month";
      }
      if (year <= 0) {
        errors.year = "Must be a valid year";
      }
      if (year > currentYear) {
        errors.year = "Must be in the past";
      }

      // Check if values exist after all other checks so empty fields will
      // throw errors
      if (!values.day) {
        errors.day = "This field is required";
      }
      if (!values.month) {
        errors.month = "This field is required";
      }
      if (!values.year) {
        errors.year = "This field is required";
      }

      return errors;
    },
  });
</script>

<form use:form>
  <div class="flex gap-2 md:gap-4 md:mr-16">
    <Input name="day" placeholder="DD" max={2} error={$errors.day} />
    <Input name="month" placeholder="MM" max={2} error={$errors.month} />
    <Input name="year" placeholder="YYYY" max={4} error={$errors.year} />
  </div>
  <Divider />
</form>

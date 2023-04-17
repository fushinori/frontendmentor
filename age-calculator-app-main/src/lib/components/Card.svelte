<script lang="ts">
  import Form from "./Form.svelte";
  import { age } from "../store";
  import Age from "./Age.svelte";

  $: years = $age.years;
  $: months = $age.months;
  $: days = $age.days;
</script>

<article
  class="bg-white-100 rounded-t-2xl rounded-bl-2xl rounded-br-[75px] md:p-8 px-4 py-8"
>
  <Form />
  <div>
    <Age date={years} name="years" />
    <Age date={months} name="months" />
    <Age date={days} name="days" />
  </div>
</article>

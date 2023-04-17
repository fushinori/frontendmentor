<script lang="ts">
  export let name: "day" | "month" | "year";
  export let placeholder: string;
  export let max: number;
  export let error: string[] | null;
  const successLabel =
    "text-[8px] uppercase tracking-widest font-bold text-gray-400";
  const errorLabel = "text-[8px] uppercase tracking-widest font-bold text-red";

  const successInput =
    "outline-none border-gray-100 border-[1px] font-bold p-2 rounded-md max-w-[80px] focus:border-purple";
  const errorInput =
    "outline-none border-gray-100 border-[1px] font-bold p-2 rounded-md max-w-[80px] border-red";
</script>

<div class="flex flex-col gap-1">
  <label for={name} class={error ? errorLabel : successLabel}>{name}</label>
  <input
    type="text"
    {name}
    {placeholder}
    class={error ? errorInput : successInput}
    maxlength={max}
  />
  {#if error}
    <p class="text-[0.5rem] text-red italic">{error[0]}</p>
  {/if}
</div>

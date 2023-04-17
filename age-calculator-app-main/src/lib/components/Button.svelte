<script lang="ts">
  import arrow from "$lib/assets/icon-arrow.svg";

  export let positionStyles: string = "";

  let classStyles =
    "bg-purple hover:bg-black outline-none focus:bg-black rounded-full p-4 ";
  classStyles = classStyles.concat(positionStyles);
</script>

<button type="submit" class={classStyles}
  ><img src={arrow} alt="Submit" class="md:w-7 w-5" /></button
>

<script>
    import Spinner from "./Spinner.svelte";
    import Results from "./Results.svelte";
    import Search from "./Search.svelte";
    // @ts-ignore
import { promise } from "./stores.js";

</script>

<main class="bg-base-200">
    <Search/>

    {#await $promise}
        <Spinner />
    {:then result}
        <Results json={result} />
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }
    main {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex: start;
        align-items: center;
        flex-direction: column;
        gap: 25px;
        box-sizing: border-box;
    }
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    /* @media only screen and (max-width:550px){
        *{
            margin: 0;
            padding: 0;
        }
    } */
</style>
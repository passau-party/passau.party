<script lang="ts">
    import AdminPanel from './lib/AdminPanel.svelte'
    import Billboard from './lib/Billboard.svelte'
    import BillboardHeader from './lib/BillboardHeader.svelte'
    import Logo from './lib/Logo.svelte'
    let adminMode: boolean = false
</script>

<main>
    {#if !adminMode}
        <Logo />
        <BillboardHeader />
        <Billboard />
    {:else}
        <AdminPanel />
    {/if}
</main>

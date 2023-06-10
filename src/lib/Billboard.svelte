<script lang="ts">
    import { onMount } from 'svelte'
    import Party from './PartyCard.svelte'
    import MessageDialog from './MessageDialog.svelte'
    import PartyDialog from './PartyDialog.svelte'
    import { getPartys } from '../helpers/controller'
    import type { Record } from 'pocketbase'

    let selectedParty: Record | undefined = undefined
    let partys: Record[] = []

    // Minute 4: Hin und wieder wurde ich als zweiter gewählt das fand ich doof...

    onMount(async () => {
        partys = await getPartys()
    })
</script>

<div>
    {#each partys as partyy}
        {#if partyy.reviewed}
            <Party party={partyy} onPartyClick={(p) => (selectedParty = p)} />
        {/if}
    {/each}
    <PartyDialog
        onPartyClose={() => (selectedParty = undefined)}
        party={selectedParty}
    />
    <MessageDialog />
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>

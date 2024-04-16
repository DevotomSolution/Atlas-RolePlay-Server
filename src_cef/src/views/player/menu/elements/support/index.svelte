<script>
    import './main.sass';

    import Chat from './chat.svelte'
    import Guides from './guides.svelte'

    const Views = {
        Chat,
        Guides
    }

    let selectView = "Chat"

</script>

<div id ="support">
    <div class="support__nav">
        <div class="support__title">Obține ajutor</div>
        <div class="support__subtitle" class:active={selectView === "Chat"} on:click={() => selectView = "Chat"}>— Chat online cu administratorul</div>
        <div class="support__subtitle" class:active={selectView === "Guides"} on:click={() => selectView = "Guides"}>— Ghiduri</div>
    </div>
    <svelte:component this={Views[selectView]}/>
    <div class="support__nav"></div>
</div>
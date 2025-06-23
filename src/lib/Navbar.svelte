<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<main>
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<span class="ml-8 md:0 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Movie Libary
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/" active={true}>Home</NavLi>
		</NavUl>
	</Navbar>
</main>

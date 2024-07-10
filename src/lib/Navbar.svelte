<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem } from 'flowbite-svelte';
</script>

<main>
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Flowbite
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi>Genres</NavLi>
			<Dropdown label="Genres">
				<DropdownItem>Action</DropdownItem>
				<DropdownItem>Comedy</DropdownItem>
				<DropdownItem>Drama</DropdownItem>
			</Dropdown>
		</NavUl>
	</Navbar>
</main>

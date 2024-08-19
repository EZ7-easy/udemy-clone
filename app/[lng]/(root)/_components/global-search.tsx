import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function GlobalSearch() {
	return (
		<div>
			<Button variant={'ghost'} size={'icon'}>
				<Search />
			</Button>
		</div>
	)
}

export default GlobalSearch

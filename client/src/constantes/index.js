export const LOCAL_HOST = 'http://localhost:3001'
export const ASCENDANT = 'ASCENDANT'
export const DESCENDANT = 'DESCENDANT'
export const DEFAULT_CARD_IMG = 'https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

// this local host should go to env file? 

export function paginator(items, current_page, per_page_items) {
	let page = current_page || 1,
	per_page = per_page_items || 12,
	offset = (page - 1) * per_page,

	paginatedItems = items.slice(offset).slice(0, per_page_items),
	total_pages = Math.ceil(items.length / per_page);

	return {
		page: page,
		per_page: per_page,
		pre_page: page - 1 ? page - 1 : null,
		next_page: (total_pages > page) ? page + 1 : null,
		total: items.length,
		total_pages: total_pages,
		data: paginatedItems
	};
}
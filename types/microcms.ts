export interface Works {
	id: string
	title: string
	content: string
	image?: { url: string; width: number; height: number }
	url?: string
	githubUrl?: string
	row: string
	column: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	revisedAt: string
}

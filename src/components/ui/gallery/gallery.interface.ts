export interface IGalleryItem {
	poster: string
	name: string
	link: string
	content?: IGalleryContent
}

interface IGalleryContent {
	title: string
	subTitle?: string
}

type variableProps = 'vertical' | 'horizontal'

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: variableProps
}

'use client'

import { Layout } from 'antd'
import { useState } from 'react'

import { Cart } from '@/entities/cart'

const { Sider } = Layout

export const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true)

	return (
		<Sider
			className={'customBg'}
			width={400}
			collapsedWidth={80}
			collapsible
			reverseArrow
			collapsed={isCollapsed}
			onCollapse={() => setIsCollapsed(!isCollapsed)}>
			<div className="p-4">{isCollapsed ? <Cart model={'default'} /> : <Cart model={'full'} />}</div>
		</Sider>
	)
}

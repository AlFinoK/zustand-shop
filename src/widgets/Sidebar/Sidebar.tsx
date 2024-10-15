'use client'

import { Button, Layout } from 'antd'
import { Cart } from '@/entities/cart'
import { useState, useEffect } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

const { Sider } = Layout

export const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true)
	const [isMobile, setIsMobile] = useState(false)

	const handleResize = () => {
		setIsMobile(window.innerWidth < 768)
		if (window.innerWidth >= 768) {
			setIsCollapsed(false)
		}
	}

	useEffect(() => {
		handleResize()

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const toggleCollapse = () => {
		setIsCollapsed((prev) => !prev)
	}

	return (
		<>
			<Sider
				className={`customBg ${isMobile ? 'mobileSidebar' : ''}`}
				width={400}
				collapsedWidth={isMobile ? 0 : 80}
				collapsible
				reverseArrow
				collapsed={isCollapsed}
				onCollapse={toggleCollapse}>
				<div className="p-4">{isCollapsed ? <Cart model={'default'} /> : <Cart model={'full'} />}</div>
			</Sider>
			{isMobile && (
				<Button
					className={'bg-blue-500 w-14 h-14 text-white fixed right-6 bottom-6 z-[2000]'}
					onClick={toggleCollapse}>
					{isCollapsed ? <ArrowLeftOutlined /> : <ArrowRightOutlined />}
				</Button>
			)}
		</>
	)
}

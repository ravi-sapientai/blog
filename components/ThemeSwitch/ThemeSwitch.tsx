'use client'

import cx from 'classnames'
import { useReducedMotion } from 'framer-motion'
import { useCallback } from 'react'
import styles from './ThemeSwitch.module.css'
import { useDarkMode } from '@/hooks'
import { Toggle } from '@/components/Motion'
import { Moon, Sun } from '@/components/Icons'

interface Props {
  className?: string
}

function ThemeSwitch({ className }: Props): JSX.Element {
  const [darkMode, setDarkMode] = useDarkMode()
  const shouldReduceMotion = useReducedMotion()
  const handleClick = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode, setDarkMode])

  return (
    <Toggle
      className={cx('outline-focus-visible', styles.button)}
      isToggled={darkMode}
      onToggle={handleClick}
      iconClose={<Sun className={className} />}
      iconOpen={<Moon className={className} />}
      shouldReduceMotion={shouldReduceMotion}
    />
  )
}

export default ThemeSwitch

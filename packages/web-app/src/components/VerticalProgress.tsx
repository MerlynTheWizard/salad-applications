import React, { CSSProperties } from 'react'
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../SaladTheme'
import classnames from 'classnames'

const styles = (theme: SaladTheme) => ({
  container: {
    position: 'relative',
    backgroundColor: 'lightGrey',
    height: 'auto',
    width: '1rem',
  },
  bar: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: (props: Props) => (props.progress ? `${props.progress}%` : '0'),
    backgroundColor: (props: Props) => (props.barColor ? props.barColor : 'grey'),
  },
})

interface Props extends WithStyles<typeof styles> {
  barColor?: string
  progress?: number
  className?: string
  style?: CSSProperties
}

const _VerticalProgress = ({ style, className, classes }: Props) => (
  <div style={style} className={classnames(classes.container, className)}>
    <div className={classes.bar} />
  </div>
)

export const VerticalProgress = withStyles(styles)(_VerticalProgress)

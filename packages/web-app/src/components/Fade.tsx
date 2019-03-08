import React, { Component, CSSProperties } from 'react'
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../SaladTheme'
import classNames from 'classnames'

const styles = (theme: SaladTheme) => ({
  container: {
    pointerEvents: 'none',
  },
  childContainer: {
    pointerEvents: 'auto',
  },
  upGradient: {
    background: `linear-gradient(transparent, ${theme.appBackgroundColor})`,
  },
  downGradient: {
    background: `linear-gradient(${theme.appBackgroundColor}, transparent)`,
  },
})

interface Props extends WithStyles<typeof styles> {
  direction?: 'up' | 'down'
  className?: string
  style?: CSSProperties
}

class _Fade extends Component<Props> {
  render() {
    const { className, style, direction, classes, children } = this.props
    return (
      <div
        style={style}
        className={classNames('is-unselectable', className, classes.container, {
          [classes.upGradient]: direction === 'up',
          [classes.downGradient]: direction === 'down',
        })}
      >
        <div className={classes.childContainer}>{children}</div>
      </div>
    )
  }
}

export const Fade = withStyles(styles)(_Fade)

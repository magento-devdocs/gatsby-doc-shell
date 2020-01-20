import React, { useCallback, useState } from "react"
import { bool, oneOf, string } from "prop-types"

import "@spectrum-css/alert"
import "@spectrum-css/icon"
import "@spectrum-css/button"

import AlertMedium from "@spectrum-css/icon/combined/AlertMedium.svg"
import InfoMedium from "@spectrum-css/icon/combined/InfoMedium.svg"
import SuccessMedium from "@spectrum-css/icon/combined/SuccessMedium.svg"

const iconMap = {
  info: InfoMedium,
  tip: SuccessMedium,
  warning: AlertMedium,
  error: AlertMedium,
}

const spectrumTypeMap = {
  info: "info",
  tip: "success",
  warning: "warning",
  error: "error",
}

const Callout = props => {
  const { type, header, closeable, children } = props

  const [open, setOpen] = useState(true)
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const closeButton = closeable ? (
    <div className="spectrum-Alert-footer">
      <button
        className="spectrum-Button spectrum-Button--primary spectrum-Button--quiet"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  ) : null

  const Icon = iconMap[type]
  return open ? (
    <div className={`spectrum-Alert spectrum-Alert--${spectrumTypeMap[type]}`}>
      <Icon
        className={`spectrum-Icon spectrum-UIIcon-${iconMap[type].name} spectrum-Alert-icon`}
        focusable="false"
        aria-hidden="true"
      />
      <div className="spectrum-Alert-header">{header}</div>
      <div className="spectrum-Alert-content">{children}</div>
      {closeButton}
    </div>
  ) : null
}

Callout.propTypes = {
  closeable: bool,
  content: string,
  header: string,
  type: oneOf([
    "info", //blue
    "tip", //green
    "warning", //yellow
    "error", //red
  ]),
}

Callout.defaultProps = {
  closeable: false,
  content: "Forget to pass props to the callout again?",
  header: "Oops!",
  type: "warning",
}

export default Callout

import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD } from '../../../src/lib/breakpoints'
import { Link } from 'gatsby'

const PartName = props => {
  return (
    <Link to={props.to}>
      <p
        css={css({
          color: '#464E55',
          margin: '0',
          paddingBottom: '16px',
          paddingTop: '6px',
          alignSelf: 'center',
          fontSize: '1.2em',
          lineHeight: '1.25em',
          display: 'block',
        })}
      >
        {props.partName}
      </p>
      {props.focus ? <span>You are here</span> : null}
    </Link>
  )
}

const MultipartIntro = () => {
  return (
    <div
      css={css({
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gridColumn: '1/4',
        justifyContent: 'center',
        alignItems: 'start',
        textAlign: 'center',
        padding: '0.8em 0',
        transition: '0.6s',
        margin: '0 auto',
        marginBottom: '4em',
        '.focus': {
          padding: '14px',
          alignItems: 'center',
          transition: '0.6s',
          borderTop: '2px solid #7B44BC',
          p: {
            color: 'lightGrey',
            transition: '0.6s',
          },
          span: {
            color: '#7B44BC',
            transition: '0.6s',
          },
        },
        '.outer': {
          borderTop: '1px solid #92A3BB',
          padding: '14px',
          alignItems: 'center',
          transition: '0.6s',
        },
        '.linked': {
          ':hover': {
            borderTop: '2px solid #7B44BC',
            transition: '0.6s',
            transform: 'translateY(-6px)',
            p: {
              color: 'lightGrey',
              transition: '0.6s',
            },
            span: {
              color: '#7B44BC',
              transition: '0.6s',
            },
          },
        },
        div: {
          height: '140px',
          maxWidth: '190px',
          display: 'block',
          transition: '0.6s',
          margin: '0 6px',
        },
        p: {
          color: 'lightGrey',
          transition: '0.6s',
          alignSelf: 'center',
        },
        span: {
          color: 'lightGrey',
          alignSelf: 'start',
          fontFamily: 'sans-serif',
          fontSize: '0.8em',
          display: 'block',
          transition: '0.6s',
        },
      })}
    >
      <div className="focus">
        <span>Part 1</span>
        <PartName focus partName="A Metaphorical Introduction" />
      </div>
      <div className="outer linked">
        <span>Part 2</span>
        <PartName partName="Cultural and Linguistic Research" />
      </div>
      <div className="outer">
        <span>Part 3</span>
        <PartName partName="Lateral Thinking and Creative Play" />
      </div>
      <div className="outer">
        <span>Part 4</span>
        <PartName partName="Composition, Colour, and Completion" />
      </div>
    </div>
  )
}

export default MultipartIntro

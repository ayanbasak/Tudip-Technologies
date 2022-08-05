import React from 'react'
import "./grid.styles.css";

const GridSizes = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

const GridItemsAlignment = [ "flex-start", "center", "flex-end", "stretch", "baseline" ]

const GridJustify = [ "flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly" ]
   
export const Grid = (props) => {
    const { alignItems, children, column, justify, lg, md, row, sm } = props;

    if(!!sm && !GridSizes.includes(sm)){
        throw new Error("sm value must be within 1 to 12")
    }

    if(!!md && !GridSizes.includes(md)){
        throw new Error("md value must be within 1 to 12")
    }

    if(!!lg && !GridSizes.includes(lg)){
        throw new Error("lg value must be within 1 to 12")
    }

    if(!!alignItems && !GridItemsAlignment.includes(alignItems)){
        throw new Error("plese provide proper alignItems value")
    }

    if(!!justify && !GridJustify.includes(justify)){
        throw new Error("plese provide proper justify value")
    }
    
    const classes =
        (!row ? "column" : "row") +
        // Row styling
        (row && justify ? ` ${justify}` : "") +
        (row && alignItems ? ` ${"align-" + alignItems}` : "") +
        // Column styling
        (column && sm ? ` ${"sm-" + sm}` : "") +
        (column && md ? ` ${"md-" + md}` : "") +
        (column && lg ? ` ${"lg-" + lg}` : "");

  return (
    <div className={classes}>{children}</div>
  )
}

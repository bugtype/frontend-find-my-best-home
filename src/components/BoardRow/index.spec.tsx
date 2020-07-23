import React from "react";
import TestRenderer from "react-test-renderer";
import { BoardRow, DateTime } from "@components";
import { BoardModel } from "@models";

describe("BoardRow 테스트", () => {
  it("정상적으로 렌더링 되는가", () => {
    const mock: BoardModel = {
      id: 1,
      content: "blabla",
      city: "종로",
      subject: "종로도 좋아요",
      userName: "종로-자취생",
      date: "2020-03-19T08:26:38.837Z",
    };
    const testRenderer = TestRenderer.create(<BoardRow item={mock} />);
    const testInstance = testRenderer.root;
    expect(testRenderer.toJSON()).toMatchInlineSnapshot(`
      <tr
        className="MuiTableRow-root"
        role={null}
      >
        <td
          aria-sort={null}
          className="MuiTableCell-root"
        >
          1
        </td>
        <td
          aria-sort={null}
          className="MuiTableCell-root"
        >
          종로
        </td>
        <th
          aria-sort={null}
          className="MuiTableCell-root"
          role="cell"
          scope="row"
        >
          Link
        </th>
        <td
          aria-sort={null}
          className="MuiTableCell-root MuiTableCell-alignRight"
        >
          종로-자취생
        </td>
        <td
          aria-sort={null}
          className="MuiTableCell-root MuiTableCell-alignRight"
        >
          03-19
        </td>
      </tr>
    `);

    expect(testInstance.findByType(DateTime).props.date).toBe(mock.date);
  });
});

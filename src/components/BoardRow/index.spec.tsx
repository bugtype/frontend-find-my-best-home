import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BoardRow, DateTime } from '@components';
import { Board } from '@models';
import { Grid } from '@material-ui/core';

describe('BoardRow 테스트', () => {
  it('정상적으로 렌더링 되는가', () => {
    const mock: Board = {
      city: '종로',
      subject: '종로도 좋아요',
      userName: '종로-자취생',
      date: '2020-03-19T08:26:38.837Z',
    };
    const testRenderer = TestRenderer.create(<BoardRow item={mock} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType(Grid).length).toEqual(5);
    expect(testInstance.findByType(DateTime).props.date).toBe(mock.date);
  });
});

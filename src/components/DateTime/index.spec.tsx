import React from 'react';
import TestRenderer from 'react-test-renderer';
import { DateTime } from '@components';
import { Grid } from '@material-ui/core';

const mockDate = '2020-03-19T08:26:38.837Z';
describe('BoardRow 테스트', () => {
  it('Asia/Seoul 정상적으로 보여주는가 ? ', () => {
    const testRenderer = TestRenderer.create(
      <DateTime date={mockDate} timezone="Asia/Seoul" />
    );
    expect(testRenderer.toJSON()).toBe('2020-03-19 17:26');
  });

  it('America/Los_Angeles 정상적으로 보여주는가? ', () => {
    const testRenderer = TestRenderer.create(
      <DateTime date={mockDate} timezone="America/Los_Angeles" />
    );
    expect(testRenderer.toJSON()).toBe('2020-03-19 01:26');
  });
});

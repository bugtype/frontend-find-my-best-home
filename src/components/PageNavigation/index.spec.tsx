import React from 'react';
import TestRenderer from 'react-test-renderer';
import { PageNavigation } from '@components';
import { Typography, Grid } from '@material-ui/core';

describe('PageNavigation 테스트', () => {
  it('page 1에 파란색으로 표시되는가? ', () => {
    const page = 1;
    const start = 1;
    const last = 2;

    const testRenderer = TestRenderer.create(
      <PageNavigation
        currentPage={page}
        start={start}
        last={last}
        onPageClick={() => {}}
      />
    );
    const testInstance = testRenderer.root;
    const isSelectedColor = testInstance
      .findAllByType(Typography)
      .some((e) => e.props.children === 1 && e.props.color === 'primary');
    expect(isSelectedColor).toEqual(true);
  });

  it('page 2에 파란색으로 표시되는가? ', () => {
    const page = 2;
    const start = 1;
    const last = 2;

    const testRenderer = TestRenderer.create(
      <PageNavigation
        currentPage={page}
        start={start}
        last={last}
        onPageClick={() => {}}
      />
    );
    const testInstance = testRenderer.root;
    const isSelectedColor = testInstance
      .findAllByType(Typography)
      .some((e) => e.props.children === 2 && e.props.color === 'primary');
    expect(isSelectedColor).toEqual(true);
  });

  it('page가 last-start+1 만큼 표시되는가? ', () => {
    const page = 1;
    const start = 5;
    const last = 10;

    const testRenderer = TestRenderer.create(
      <PageNavigation
        currentPage={page}
        start={start}
        last={last}
        onPageClick={() => {}}
      />
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType(Typography).length).toEqual(
      last - start + 1
    );
  });

  // TODO: 에러 테스트 코드
});

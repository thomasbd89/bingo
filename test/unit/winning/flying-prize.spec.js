/**
 * Created by Mihail on 11/10/2016.
 */

'use strict';

import FlyingPrize from '../../../src/winning/flying-prize';
import Animator from '../../../src/utils/animator'
import { expect } from 'chai';

describe('FlyingPrize module', () => {
	test('Should contain the prize sum to animate flying', () => {
		const fp = new FlyingPrize(123);
		expect(fp.sum).to.be.equal(123);
	});

	test('Should contain a method for animating the prize', () => {
		expect(FlyingPrize.animatePrizeFlying).not.to.be.undefined;
	});

	test('Should use Animator method moveDiagonally', () => {
		FlyingPrize.animatePrizeFlying(123);
		expect(Animator.moveDiagonally).to.be.calledOnce;
	});
});
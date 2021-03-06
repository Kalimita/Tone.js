import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode";
import { Multiply } from "./Multiply";
import { SignalOperator } from "./SignalOperator";

/**
 * Negate the incoming signal. i.e. an input signal of 10 will output -10
 *
 * @example
 * import { Negate, Signal } from "tone";
 * const neg = new Negate();
 * const sig = new Signal(-2).connect(neg);
 * // output of neg is positive 2.
 * @category Signal
 */
export class Negate extends SignalOperator<ToneAudioNodeOptions> {

	readonly name: string = "Negate";

	/**
	 * negation is done by multiplying by -1
	 */
	private _multiply: Multiply = new Multiply({
		context: this.context,
		value: -1,
	});

	/**
	 * The input and output are equal to the multiply node
	 */
	input = this._multiply;
	output = this._multiply;

	/**
	 * clean up
	 * @returns {Negate} this
	 */
	dispose(): this {
		super.dispose();
		this._multiply.dispose();
		return this;
	}
}

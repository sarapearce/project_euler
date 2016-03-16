//https://www.hackerrank.com/contests/projecteuler/challenges/euler113

class NotBouncy {

	    //function to sort numbers into bouncy and not_bouncy, then count not_bouncy
	    public function findNotBouncy($k) {

		for ($i = pow(10,$k); $i > 0; --$i) {

		    $number_array = str_split($i);

		    $sorted_asc = sort($number_array);
		    $unsorted_asc = array_diff($number_array, $sorted_asc);

		    if (!$unsorted_asc) {
			//digits are in ascending order
			$not_bouncy[] = implode('', $number_array);
		    }

		    $sorted_desc = rsort($number_array);
		    $unsorted_desc = array_diff($sorted_desc, $number_array);

		    if (!$unsorted_desc) {
			//digits are in descending order
			$not_bouncy[] = implode('', $number_array);
		    }
		}
		echo count($not_bouncy);
	    }

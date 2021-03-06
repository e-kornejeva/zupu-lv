<?php
if(!defined('ABSPATH')) { exit; }

/**Actions */
if(isset($_POST['action'])) {
    if ( wp_verify_nonce(  sanitize_text_field($_POST['save_option_nonce']), 'edw_nonce' ) ) {
        if(sanitize_text_field($_POST['action']) == 'save_options') {
            if(isset($_POST['_edw_disabled_days']) and is_array($_POST['_edw_disabled_days'])) {
                //Sanitize disabled days
                $disabledDays = array_map('sanitize_text_field', $_POST['_edw_disabled_days']);
                update_option('_edw_disabled_days', $disabledDays );
            }
            update_option('_edw_position',sanitize_text_field( $_POST['_edw_position'] ));
            update_option('_edw_days',sanitize_text_field( $_POST['_edw_days'] ));
            update_option('_edw_mode',sanitize_text_field( $_POST['_edw_mode'] ));
        }
    }
}
$disabledDays = get_option('_edw_disabled_days');
$currentPosition = get_option('_edw_position','woocommerce_after_add_to_cart_button');
?>
<div class="wrap edwpanel">
    <h1><?=__('Estimated Delivery for Woocommerce', 'estimated-delivery-for-woocommerce')?></h1>
    <p><?=__('Show the estimated or guaranteed delivery for the product','estimated-delivery-for-woocommerce')?></p>
    <?php
    $tab = 'general';
    if($tab == 'general') { 
        $currentPosition = get_option('_edw_position','woocommerce_after_add_to_cart_button');
    ?>
        <!--Donate button-->
        <div>
            <a href="https://paypal.me/taxarpro" target="_blank" style="text-decoration: none;font-size: 18px;border: 1px solid #333;padding: 10px;display: block;width: fit-content;border-radius: 10px;background: #FFF;">☕ <?=__('You buy me a coffe? Click here','estimated-delivery-for-woocommerce')?> ☕</a>
        </div>
        <br>
        <!-- <div>
        <a href="https://paypal.me/taxarpro" target="_blank" style="text-decoration: none;font-size: 18px;border: 1px solid #333;padding: 10px;display: block;width: fit-content;border-radius: 10px;background: #FFF;">🚀
            <?php 
            // echo __('Buy PRO version, Click here to see all the features','estimated-delivery-for-woocommerce')
            ?>
        </a>
        </div> -->

        <form method="post">
            <input type="hidden" name="action" value="save_options" />
            <?php wp_nonce_field( 'edw_nonce', 'save_option_nonce' ); ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row"><?=__('Days for Delivery', 'estimated-delivery-for-woocommerce')?>
                    </th>
                    <td>
                        <label>
                        <input type="number" min="0" max="99999" name="_edw_days" value="<?=get_option('_edw_days', '0')?>" /></label>
                    </td>
                </tr>
                <tr valign="top">
                    <th scope="row"><?=__('Estimated or Guaranteed', 'estimated-delivery-for-woocommerce')?>
                        <p class="description"><?=__('The message will change.','estimated-delivery-for-woocommerce')?></p>
                    </th>
                    <td>
                        <label>
                        <select name="_edw_mode">
                            <option value="1" <?php selected("1", get_option('_edw_mode', '1')) ?>><?=__('Estimated','estimated-delivery-for-woocommerce');?></option>
                            <option value="2" <?php selected("2", get_option('_edw_mode')) ?>><?=__('Guaranteed','estimated-delivery-for-woocommerce');?></option>
                        </select>
                        </label>
                    </td>
                </tr>
                <tr valign="top">
                    <th scope="row"><?=__('Days disabled', 'estimated-delivery-for-woocommerce')?>
                        <p class="description"><?=__('Select the days that NO shipments are made.','estimated-delivery-for-woocommerce')?></p>
                    </th>
                    <td>
                        <label>
                            <input type="checkbox" name="_edw_disabled_days[]" value="Mon" <?= (in_array('Mon', $disabledDays) == true) ? 'checked="checked"' : ''; ?> />
                            <?=__('Monday','estimated-delivery-for-woocommerce');?>
                        </label>
                        <br>
                        <label>
                            <input type="checkbox" name="_edw_disabled_days[]" value="Tue" <?= (in_array('Tue', $disabledDays) == true) ? 'checked="checked"' : ''; ?> />
                            <?=__('Tuesday','estimated-delivery-for-woocommerce');?>
                        </label>
                        <br>
                        <label>
                            <input type="checkbox" name="_edw_disabled_days[]" value="Wed" <?= (in_array('Wed', $disabledDays) == true) ? 'checked="checked"' : ''; ?> />
                            <?=__('Wednesday','estimated-delivery-for-woocommerce');?>
                        </label>
                        <br>
                        <label>
                            <input type="checkbox" name="_edw_disabled_days[]" value="Thu" <?= (in_array('Thu', $disabledDays) == true) ? 'checked="checked"' : ''; ?> />
                            <?=__('Thursday','estimated-delivery-for-woocommerce');?>
                        </label>
                        <br>
                        <label>
                            <input type="checkbox" name="_edw_disabled_days[]" value="Fri" <?= (in_array('Fri', $disabledDays) == true) ? 'checked="checked"' : ''; ?> />
                            <?=__('Friday','estimated-delivery-for-woocommerce');?>
                        </label>
                        <br>
                        <label>
                            <input type="checkbox" name="_edw_disabled_days[]" value="Sat" <?= (in_array('Sat', $disabledDays) == true) ? 'checked="checked"' : ''; ?> />
                            <?=__('Saturday','estimated-delivery-for-woocommerce');?>
                        </label>
                        <br>
                        <label>
                            <input type="checkbox" name="_edw_disabled_days[]" value="Sun" <?= (in_array('Sun', $disabledDays) == true) ? 'checked="checked"' : ''; ?> />
                            <?=__('Sunday','estimated-delivery-for-woocommerce');?>
                        </label>
                    </td>
                </tr>
                <tr valign="top">
                    <th scope="row"><?=__('Position', 'estimated-delivery-for-woocommerce')?></th>
                    <td>
                        <label>
                            <select name="_edw_position">
                                <?php
                                    foreach(EDWCore::$positions as $key => $pos) {
                                        echo '<option value="'.$key.'" '.selected($key,$currentPosition).'>'.$pos.'</option>';
                                    }
                                ?>               
                            </select>
                        </label>
                    </td>
                </tr>
            </table>
            <input class="button" type="submit" value="<?=__('Save','estimated-delivery-for-woocommerce');?>">
        </form>
        <h2><?=__('Need style?', 'estimated-delivery-for-woocommerce')?></h2>
        <p><?=__('Enjoy! Paste this CSS code into your Customizer and edit as you like','estimated-delivery-for-woocommerce')?></p>
<pre>
.edw_date {
    margin: 10px 0px;
    padding: 10px;
    width: fit-content;
}
</pre>
    <?php
    }
    
    ?>

</div>